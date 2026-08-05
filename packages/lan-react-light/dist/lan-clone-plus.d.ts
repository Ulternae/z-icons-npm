import React from 'react';

export interface LanClonePlusProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanClonePlus(props: LanClonePlusProps): React.ReactElement;
export default LanClonePlus;
