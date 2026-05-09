import React from 'react';

export interface MinaNotificationProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaNotification: React.FC<MinaNotificationProps>;
export default MinaNotification;
