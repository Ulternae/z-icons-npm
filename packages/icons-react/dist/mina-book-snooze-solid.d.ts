import React from 'react';

export interface MinaBookSnoozeSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaBookSnoozeSolid: React.FC<MinaBookSnoozeSolidProps>;
export default MinaBookSnoozeSolid;
