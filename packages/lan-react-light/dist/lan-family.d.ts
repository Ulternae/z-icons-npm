import React from 'react';

export interface LanFamilyProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanFamily(props: LanFamilyProps): React.ReactElement;
export default LanFamily;
