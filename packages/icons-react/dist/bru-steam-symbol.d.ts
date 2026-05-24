import React from 'react';

export interface BruSteamSymbolProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const BruSteamSymbol: React.FC<BruSteamSymbolProps>;
export default BruSteamSymbol;
