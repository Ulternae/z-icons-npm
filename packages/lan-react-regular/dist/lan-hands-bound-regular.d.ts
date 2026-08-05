import React from 'react';

export interface LanHandsBoundRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanHandsBoundRegular(props: LanHandsBoundRegularProps): React.ReactElement;
export default LanHandsBoundRegular;
