import React from 'react';

export interface LanLibraRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanLibraRegular(props: LanLibraRegularProps): React.ReactElement;
export default LanLibraRegular;
