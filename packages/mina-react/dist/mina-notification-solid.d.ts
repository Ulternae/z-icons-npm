import React from 'react';

export interface MinaNotificationSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaNotificationSolid(props: MinaNotificationSolidProps): React.ReactElement;
export default MinaNotificationSolid;
