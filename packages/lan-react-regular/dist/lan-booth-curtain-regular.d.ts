import React from 'react';

export interface LanBoothCurtainRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanBoothCurtainRegular(props: LanBoothCurtainRegularProps): React.ReactElement;
export default LanBoothCurtainRegular;
