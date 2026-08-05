import React from 'react';

export interface MinaCalendarSlashProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaCalendarSlash(props: MinaCalendarSlashProps): React.ReactElement;
export default MinaCalendarSlash;
