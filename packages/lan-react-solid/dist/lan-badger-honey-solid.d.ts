import React from 'react';

export interface LanBadgerHoneySolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanBadgerHoneySolid(props: LanBadgerHoneySolidProps): React.ReactElement;
export default LanBadgerHoneySolid;
