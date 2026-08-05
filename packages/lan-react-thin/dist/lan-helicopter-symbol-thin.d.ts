import React from 'react';

export interface LanHelicopterSymbolThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanHelicopterSymbolThin(props: LanHelicopterSymbolThinProps): React.ReactElement;
export default LanHelicopterSymbolThin;
