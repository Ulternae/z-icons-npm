import React from 'react';

export interface MinaSearchSnoozeProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaSearchSnooze(props: MinaSearchSnoozeProps): React.ReactElement;
export default MinaSearchSnooze;
