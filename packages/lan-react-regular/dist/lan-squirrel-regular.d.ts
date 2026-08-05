import React from 'react';

export interface LanSquirrelRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanSquirrelRegular(props: LanSquirrelRegularProps): React.ReactElement;
export default LanSquirrelRegular;
