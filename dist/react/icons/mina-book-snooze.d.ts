import React from 'react';

export interface MinaBookSnoozeProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaBookSnooze: React.FC<MinaBookSnoozeProps>;
export default MinaBookSnooze;
