import React from 'react';

export interface BruSteamSymbolProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function BruSteamSymbol(props: BruSteamSymbolProps): React.ReactElement;
export default BruSteamSymbol;
