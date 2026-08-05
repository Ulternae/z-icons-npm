import React from 'react';

export interface LanHelicopterSymbolRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanHelicopterSymbolRegular(props: LanHelicopterSymbolRegularProps): React.ReactElement;
export default LanHelicopterSymbolRegular;
