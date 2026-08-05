import React from 'react';

export interface LanChildDressProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanChildDress(props: LanChildDressProps): React.ReactElement;
export default LanChildDress;
