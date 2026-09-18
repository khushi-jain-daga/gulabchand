"use client";

import React, { useState } from "react";
import { PRODUCTS } from "@/data/products";
import { Order, OrderStatus, Product } from "@/types";
import { ShieldCheck, DollarSign, Clock, Search, ToggleLeft, ToggleRight, Sparkles, ShoppingBag, Layers, AlertCircle, TrendingUp, CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";

export default function AdminPage() {
  const [orders, setOrders] = useState<Order[]>([
    {
      id: "GCP-8012",
      customerName: "Radhika Sharma",
      phone: "+91 98290 44312",
      items: [
        { id: "1", product: PRODUCTS[0], quantity: 1, selectedSize: "M" },
        { id: "2", product: PRODUCTS[2], quantity: 1, selectedSize: "L" },
      ],
      totalAmount: 3800,
      status: "Hand Block Printing",
      orderTime: "10:15 AM",
      deliveryAddress: "C-Scheme, Jaipur",
    },
    {
      id: "GCP-8013",
      customerName: "Meenakshi Kothari",
      phone: "+91 94140 88291",
      items: [
        { id: "3", product: PRODUCTS[1], quantity: 1, selectedSize: "L" },
      ],
      totalAmount: 3290,
      status: "Processing",
      orderTime: "10:40 AM",
      deliveryAddress: "Vasant Vihar, New Delhi",
    },
    {
      id: "GCP-8014",
      customerName: "Siddharth Roy",
      phone: "+91 98291 00293",
      items: [
        { id: "4", product: PRODUCTS[3], quantity: 2 },
      ],
      totalAmount: 5780,
      status: "Dispatched",
      orderTime: "11:10 AM",
      deliveryAddress: "Bandra West, Mumbai",
    },
    {
      id: "GCP-8015",
      customerName: "Priyanka Verma",
      phone: "+91 94141 77321",
      items: [
        { id: "5", product: PRODUCTS[4], quantity: 1, selectedSize: "S" },
      ],
      totalAmount: 1190,
      status: "Delivered",
      orderTime: "11:45 AM",
      deliveryAddress: "Raja Park, Jaipur",
    },
  ]);

  const [stockMap, setStockMap] = useState<Record<string, Product["stockStatus"]>>({
    "indigo-dabu-dress": "In Stock",
    "madder-rose-suit-set": "In Stock",
    "bagru-print-men-shirt": "In Stock",
    "quilted-dohar-bedsheet": "Low Stock",
    "white-hand-block-cotton-top": "In Stock",
    "anarkali-block-print-suit": "In Stock",
    "block-print-mulmul-saree": "Low Stock",
    "108-cotton-bedsheet": "In Stock",
    "hand-block-cushion-cover": "Sold Out",
    "cotton-dupatta-kota": "In Stock",
  });

  const [orderSearch, setOrderSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState<string>("all");

  const updateOrderStatus = (orderId: string, newStatus: OrderStatus) => {
    setOrders((prev) =>
      prev.map((o) => (o.id === orderId ? { ...o, status: newStatus } : o))
    );
  };

  const cycleStock = (productId: string) => {
    setStockMap((prev) => {
      const current = prev[productId] || "In Stock";
      let next: Product["stockStatus"] = "In Stock";
      if (current === "In Stock") next = "Low Stock";
      else if (current === "Low Stock") next = "Sold Out";
      else next = "In Stock";
      return { ...prev, [productId]: next };
    });
  };

  const filteredOrders = orders.filter((order) => {
    const matchesSearch =
      order.id.toLowerCase().includes(orderSearch.toLowerCase()) ||
      order.customerName.toLowerCase().includes(orderSearch.toLowerCase()) ||
      order.phone.includes(orderSearch);
    const matchesStatus = statusFilter === "all" || order.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  return (
    <div className="pt-28 pb-24 bg-cotton-100 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-10 border-b border-wood-700/15 pb-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-indigo-900 text-cotton-50 text-xs font-mono uppercase tracking-widest mb-2 shadow-md">
              <ShieldCheck className="w-3.5 h-3.5 text-turmeric-400" />
              <span>FASHION COMMERCE ADMIN DASHBOARD</span>
            </div>
            <h1 className="text-3xl sm:text-5xl font-serif font-bold text-ink-900">
              GULAB CHAND <span className="italic text-indigo-900 font-normal">STORE CONTROL</span>
            </h1>
          </div>

          <div className="flex items-center gap-3">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-100 border border-emerald-300 text-emerald-900 font-mono text-xs font-bold shadow-sm">
              <span className="w-2 h-2 rounded-full bg-emerald-600 animate-ping" />
              CITYPULSE STORE ONLINE
            </span>
          </div>
        </div>

        {/* Analytics Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-12">
          
          <div className="p-6 rounded-3xl bg-white border border-wood-700/20 shadow-xl flex items-center justify-between">
            <div>
              <p className="text-[11px] font-mono text-wood-700 uppercase tracking-wider font-bold">TODAY'S ORDERS</p>
              <h3 className="text-3xl font-serif font-bold text-ink-900 mt-1">18 Orders</h3>
              <p className="text-[11px] text-emerald-700 font-mono mt-1 font-bold">+24% vs yesterday</p>
            </div>
            <div className="w-12 h-12 rounded-2xl bg-indigo-100 text-indigo-900 flex items-center justify-center">
              <ShoppingBag className="w-6 h-6" />
            </div>
          </div>

          <div className="p-6 rounded-3xl bg-white border border-wood-700/20 shadow-xl flex items-center justify-between">
            <div>
              <p className="text-[11px] font-mono text-wood-700 uppercase tracking-wider font-bold">TODAY'S REVENUE</p>
              <h3 className="text-3xl font-serif font-bold text-indigo-900 mt-1">₹42,850</h3>
              <p className="text-[11px] text-wood-700 font-mono mt-1">Avg Order: ₹2,380</p>
            </div>
            <div className="w-12 h-12 rounded-2xl bg-wood-100 text-wood-800 flex items-center justify-center">
              <DollarSign className="w-6 h-6" />
            </div>
          </div>

          <div className="p-6 rounded-3xl bg-white border border-wood-700/20 shadow-xl flex items-center justify-between">
            <div>
              <p className="text-[11px] font-mono text-wood-700 uppercase tracking-wider font-bold">LOW STOCK WARNING</p>
              <h3 className="text-3xl font-serif font-bold text-madder-700 mt-1">2 Items</h3>
              <p className="text-[11px] text-madder-700 font-mono mt-1 font-bold">Dohar & Saree</p>
            </div>
            <div className="w-12 h-12 rounded-2xl bg-madder-100 text-madder-700 flex items-center justify-center">
              <AlertCircle className="w-6 h-6" />
            </div>
          </div>

          <div className="p-6 rounded-3xl bg-white border border-wood-700/20 shadow-xl flex items-center justify-between">
            <div>
              <p className="text-[11px] font-mono text-wood-700 uppercase tracking-wider font-bold">TOP CATEGORY</p>
              <h3 className="text-2xl font-serif font-bold text-ink-900 mt-1">Suit Sets</h3>
              <p className="text-[11px] text-indigo-900 font-mono mt-1 font-bold">42% of revenue</p>
            </div>
            <div className="w-12 h-12 rounded-2xl bg-turmeric-100 text-turmeric-600 flex items-center justify-center">
              <TrendingUp className="w-6 h-6" />
            </div>
          </div>

        </div>

        {/* Live Orders Feed */}
        <div className="p-6 sm:p-8 rounded-3xl bg-white border border-wood-700/20 shadow-2xl mb-12 space-y-6">
          
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-wood-700/15 pb-4">
            <div>
              <h3 className="text-xl font-serif font-bold text-ink-900">Live Customer Order Feed</h3>
              <p className="text-xs text-ink-600 font-mono">Manage order dispatch status & WhatsApp orders</p>
            </div>

            <div className="flex items-center gap-3">
              <div className="relative">
                <Search className="w-4 h-4 text-wood-700 absolute left-3 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  value={orderSearch}
                  onChange={(e) => setOrderSearch(e.target.value)}
                  placeholder="Search order ID or customer..."
                  className="pl-9 pr-3 py-1.5 rounded-full bg-cotton-100 border border-wood-700/20 text-ink-900 text-xs focus:outline-none focus:border-indigo-800"
                />
              </div>
            </div>
          </div>

          {/* Status Filters */}
          <div className="flex flex-wrap gap-2">
            {["all", "Processing", "Hand Block Printing", "Dispatched", "Delivered"].map((st) => (
              <button
                key={st}
                onClick={() => setStatusFilter(st)}
                className={`text-xs px-3.5 py-1.5 rounded-full font-mono transition-all border ${
                  statusFilter === st
                    ? "bg-indigo-800 text-cotton-50 font-bold border-indigo-800 shadow-md"
                    : "bg-cotton-100 border-wood-700/15 text-ink-800 hover:border-wood-700/30"
                }`}
              >
                {st === "all" ? "All Statuses" : st}
              </button>
            ))}
          </div>

          {/* Orders Table */}
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs">
              <thead>
                <tr className="border-b border-wood-700/20 font-mono text-wood-700 uppercase">
                  <th className="py-3.5 px-4">ORDER ID</th>
                  <th className="py-3.5 px-4">TIME</th>
                  <th className="py-3.5 px-4">CUSTOMER</th>
                  <th className="py-3.5 px-4">ITEMS ORDERED</th>
                  <th className="py-3.5 px-4">ADDRESS</th>
                  <th className="py-3.5 px-4">TOTAL</th>
                  <th className="py-3.5 px-4">STATUS ACTION</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-wood-700/10">
                {filteredOrders.map((order) => (
                  <tr key={order.id} className="hover:bg-cotton-100 transition-colors">
                    <td className="py-4 px-4 font-mono font-bold text-indigo-900">{order.id}</td>
                    <td className="py-4 px-4 font-mono text-ink-600">{order.orderTime}</td>
                    <td className="py-4 px-4">
                      <span className="font-serif font-bold text-ink-900 block">{order.customerName}</span>
                      <span className="font-mono text-[11px] text-ink-600">{order.phone}</span>
                    </td>
                    <td className="py-4 px-4">
                      <ul className="space-y-1 text-[11px] text-ink-800">
                        {order.items.map((item, idx) => (
                          <li key={idx}>
                            • {item.quantity}x {item.product.name} ({item.selectedSize})
                          </li>
                        ))}
                      </ul>
                    </td>
                    <td className="py-4 px-4 font-mono text-ink-700">{order.deliveryAddress}</td>
                    <td className="py-4 px-4 font-serif font-bold text-indigo-900 text-sm">₹{order.totalAmount}</td>
                    <td className="py-4 px-4">
                      <select
                        value={order.status}
                        onChange={(e) => updateOrderStatus(order.id, e.target.value as OrderStatus)}
                        className="px-3 py-1.5 rounded-lg text-xs font-mono font-semibold focus:outline-none border bg-cotton-50 border-wood-700/20 text-ink-900"
                      >
                        <option value="Processing">📋 Processing</option>
                        <option value="Hand Block Printing">🎨 Hand Block Printing</option>
                        <option value="Dispatched">🚚 Dispatched</option>
                        <option value="Delivered">✅ Delivered</option>
                      </select>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

        </div>

        {/* Inventory Stock Management Table */}
        <div className="p-6 sm:p-8 rounded-3xl bg-white border border-wood-700/20 shadow-2xl space-y-6">
          <div className="border-b border-wood-700/15 pb-4">
            <h3 className="text-xl font-serif font-bold text-ink-900">Catalog Inventory Control</h3>
            <p className="text-xs text-ink-600 font-mono">Click stock status badge to cycle: In Stock ➔ Low Stock ➔ Sold Out</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
            {PRODUCTS.map((prod) => {
              const status = stockMap[prod.id] || "In Stock";
              return (
                <div
                  key={prod.id}
                  className="p-4 rounded-2xl bg-cotton-100 border border-wood-700/15 flex items-center justify-between"
                >
                  <div>
                    <h4 className="font-serif font-bold text-xs text-ink-900 truncate max-w-[140px]">{prod.name}</h4>
                    <p className="text-[10px] font-mono text-wood-700">{prod.category}</p>
                    <span className="font-mono text-[10px] text-indigo-900 font-bold">₹{prod.price}</span>
                  </div>

                  <button
                    onClick={() => cycleStock(prod.id)}
                    className="p-1 hover:opacity-80 transition-opacity flex flex-col items-center gap-1"
                  >
                    <span
                      className={`text-[9px] font-mono px-2 py-1 rounded font-bold uppercase ${
                        status === "In Stock"
                          ? "bg-emerald-100 text-emerald-800 border border-emerald-300"
                          : status === "Low Stock"
                          ? "bg-amber-100 text-amber-800 border border-amber-300"
                          : "bg-madder-100 text-madder-800 border border-madder-300"
                      }`}
                    >
                      {status}
                    </span>
                  </button>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </div>
  );
}
