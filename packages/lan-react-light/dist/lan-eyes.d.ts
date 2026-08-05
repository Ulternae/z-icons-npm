import React from 'react';

export interface LanEyesProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanEyes(props: LanEyesProps): React.ReactElement;
export default LanEyes;
