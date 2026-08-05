import React from 'react';

export interface LanCucumberSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCucumberSolid(props: LanCucumberSolidProps): React.ReactElement;
export default LanCucumberSolid;
