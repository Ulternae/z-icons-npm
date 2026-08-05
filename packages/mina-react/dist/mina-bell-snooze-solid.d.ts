import React from 'react';

export interface MinaBellSnoozeSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaBellSnoozeSolid(props: MinaBellSnoozeSolidProps): React.ReactElement;
export default MinaBellSnoozeSolid;
