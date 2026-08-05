import React from 'react';

export interface MinaBookSnoozeSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaBookSnoozeSolid(props: MinaBookSnoozeSolidProps): React.ReactElement;
export default MinaBookSnoozeSolid;
