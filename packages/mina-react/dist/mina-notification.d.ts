import React from 'react';

export interface MinaNotificationProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaNotification(props: MinaNotificationProps): React.ReactElement;
export default MinaNotification;
