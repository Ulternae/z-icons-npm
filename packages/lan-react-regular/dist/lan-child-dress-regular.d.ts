import React from 'react';

export interface LanChildDressRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanChildDressRegular(props: LanChildDressRegularProps): React.ReactElement;
export default LanChildDressRegular;
