import React from 'react';

export interface MinaBellSnoozeProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaBellSnooze(props: MinaBellSnoozeProps): React.ReactElement;
export default MinaBellSnooze;
