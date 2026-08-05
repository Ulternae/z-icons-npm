import React from 'react';

export interface LanBoxingGloveProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanBoxingGlove(props: LanBoxingGloveProps): React.ReactElement;
export default LanBoxingGlove;
