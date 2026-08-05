import React from 'react';

export interface MinaBookSnoozeProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaBookSnooze(props: MinaBookSnoozeProps): React.ReactElement;
export default MinaBookSnooze;
