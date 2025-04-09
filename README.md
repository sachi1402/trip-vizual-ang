# Trip Visualizer - Angular Assignment

This project is part of the recruitment process for the Angular Developer position at **TransportSimple**.

## 📌 Problem Statement

The goal is to create a trip visualizer application with the following features:

- Input fields for **Start Point** and **End Point**.
- Display of trips showing the **first three characters** of each location.
- Trips should be visualized in a responsive horizontal flow with different levels and line types:
  - ✅ **Continued Trips** (e.g., Bangalore → Chennai, Chennai → Ooty) → shown on **Level 1** with a **straight line**.
  - 🔁 **Non-Continued Trips** (e.g., Bangalore → Chennai, Ooty → Bangalore) → shown on **Level 1** with an **arrow**.
  - 🔄 **Duplicate Trips** (same Start & End repeated consecutively) → shown on **Level 2**.

## ✨ Features

- Dynamically add multiple trips.
- Intelligent classification of trip type.
- Responsive design with visualization.
- Easy-to-use interface.

## 🛠️ Tech Stack

- [Angular 16](https://angular.io/)
- [TypeScript](https://www.typescriptlang.org/)
- HTML + CSS

## 🚀 Getting Started

### Prerequisites

- Node.js (v18+ recommended)
- Angular CLI

### Installation

```bash
git clone https://github.com/sachi1402/trip-vizual-ang.git
cd trip-vizual-ang
npm install
ng serve
