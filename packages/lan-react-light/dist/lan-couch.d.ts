import React from 'react';

export interface LanCouchProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCouch(props: LanCouchProps): React.ReactElement;
export default LanCouch;
