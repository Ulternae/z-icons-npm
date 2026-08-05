import React from 'react';

export interface LanCruzeiroSignRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCruzeiroSignRegular(props: LanCruzeiroSignRegularProps): React.ReactElement;
export default LanCruzeiroSignRegular;
