import React from 'react';

export interface LanShelvesProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanShelves(props: LanShelvesProps): React.ReactElement;
export default LanShelves;
