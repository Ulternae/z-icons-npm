import React from 'react';

export interface LanBookBibleProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanBookBible(props: LanBookBibleProps): React.ReactElement;
export default LanBookBible;
