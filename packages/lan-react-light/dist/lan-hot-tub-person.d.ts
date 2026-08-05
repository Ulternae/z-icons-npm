import React from 'react';

export interface LanHotTubPersonProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanHotTubPerson(props: LanHotTubPersonProps): React.ReactElement;
export default LanHotTubPerson;
