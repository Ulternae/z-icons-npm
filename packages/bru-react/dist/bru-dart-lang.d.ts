import React from 'react';

export interface BruDartLangProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function BruDartLang(props: BruDartLangProps): React.ReactElement;
export default BruDartLang;
