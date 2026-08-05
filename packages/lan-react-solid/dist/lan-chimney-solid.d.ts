import React from 'react';

export interface LanChimneySolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanChimneySolid(props: LanChimneySolidProps): React.ReactElement;
export default LanChimneySolid;
