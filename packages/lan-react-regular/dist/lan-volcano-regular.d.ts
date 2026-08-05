import React from 'react';

export interface LanVolcanoRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanVolcanoRegular(props: LanVolcanoRegularProps): React.ReactElement;
export default LanVolcanoRegular;
