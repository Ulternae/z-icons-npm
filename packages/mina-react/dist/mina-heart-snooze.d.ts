import React from 'react';

export interface MinaHeartSnoozeProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaHeartSnooze(props: MinaHeartSnoozeProps): React.ReactElement;
export default MinaHeartSnooze;
