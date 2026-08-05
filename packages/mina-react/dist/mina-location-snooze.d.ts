import React from 'react';

export interface MinaLocationSnoozeProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaLocationSnooze(props: MinaLocationSnoozeProps): React.ReactElement;
export default MinaLocationSnooze;
