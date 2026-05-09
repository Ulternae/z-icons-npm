import React from 'react';

export interface MinaNotificationSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaNotificationSolid: React.FC<MinaNotificationSolidProps>;
export default MinaNotificationSolid;
