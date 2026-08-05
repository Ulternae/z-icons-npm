import React from 'react';

export interface LanFileDocProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanFileDoc(props: LanFileDocProps): React.ReactElement;
export default LanFileDoc;
