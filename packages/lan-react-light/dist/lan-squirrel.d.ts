import React from 'react';

export interface LanSquirrelProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanSquirrel(props: LanSquirrelProps): React.ReactElement;
export default LanSquirrel;
