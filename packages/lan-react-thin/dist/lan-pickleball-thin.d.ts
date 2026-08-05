import React from 'react';

export interface LanPickleballThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanPickleballThin(props: LanPickleballThinProps): React.ReactElement;
export default LanPickleballThin;
