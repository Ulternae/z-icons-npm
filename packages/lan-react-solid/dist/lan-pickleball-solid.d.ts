import React from 'react';

export interface LanPickleballSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanPickleballSolid(props: LanPickleballSolidProps): React.ReactElement;
export default LanPickleballSolid;
