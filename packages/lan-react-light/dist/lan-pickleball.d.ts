import React from 'react';

export interface LanPickleballProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanPickleball(props: LanPickleballProps): React.ReactElement;
export default LanPickleball;
