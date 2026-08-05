import React from 'react';

export interface LanMaceProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanMace(props: LanMaceProps): React.ReactElement;
export default LanMace;
