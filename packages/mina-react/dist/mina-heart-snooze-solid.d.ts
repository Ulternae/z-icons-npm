import React from 'react';

export interface MinaHeartSnoozeSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaHeartSnoozeSolid(props: MinaHeartSnoozeSolidProps): React.ReactElement;
export default MinaHeartSnoozeSolid;
