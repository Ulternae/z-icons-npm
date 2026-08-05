import React from 'react';

export interface LanCanoePersonProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCanoePerson(props: LanCanoePersonProps): React.ReactElement;
export default LanCanoePerson;
