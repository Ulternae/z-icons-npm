import React from 'react';

export interface LanFishFinsProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanFishFins(props: LanFishFinsProps): React.ReactElement;
export default LanFishFins;
