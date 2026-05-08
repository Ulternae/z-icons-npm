import React from 'react';

export interface MinaCalendarSlashProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaCalendarSlash: React.FC<MinaCalendarSlashProps>;
export default MinaCalendarSlash;
