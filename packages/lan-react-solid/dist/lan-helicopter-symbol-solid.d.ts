import React from 'react';

export interface LanHelicopterSymbolSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanHelicopterSymbolSolid(props: LanHelicopterSymbolSolidProps): React.ReactElement;
export default LanHelicopterSymbolSolid;
