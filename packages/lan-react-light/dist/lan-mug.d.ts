import React from 'react';

export interface LanMugProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanMug(props: LanMugProps): React.ReactElement;
export default LanMug;
