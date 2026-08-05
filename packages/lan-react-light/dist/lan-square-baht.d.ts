import React from 'react';

export interface LanSquareBahtProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanSquareBaht(props: LanSquareBahtProps): React.ReactElement;
export default LanSquareBaht;
