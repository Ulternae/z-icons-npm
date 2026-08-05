import React from 'react';

export interface LanHatCowboySideProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanHatCowboySide(props: LanHatCowboySideProps): React.ReactElement;
export default LanHatCowboySide;
