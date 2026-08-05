import React from 'react';

export interface LanRestroomProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanRestroom(props: LanRestroomProps): React.ReactElement;
export default LanRestroom;
